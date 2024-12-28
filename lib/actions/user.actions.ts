"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";

const getUserByEmail = async (email: string) => {
    const {databases} = await createAdminClient();
    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("email", [email])],
    );

    return result.total > 0 ? result.documents[0] : null; 
};

const handleError = (error: unknown, message: string) => {
    console.log(error, message);
    throw error;
};

export const sendEmailOTP = async ({email}: {email: string}) => {
    const {account} = await createAdminClient();
    try {
        const session = await account.createEmailToken(ID.unique(), email);
        return session.userId;
    } catch (error) {
        handleError(error, "Failed to send an email OTP");
    }
};

export const createAccount = async ({fullName, email}: {fullName: string; email: string;}) => {
    const existingUser = await getUserByEmail(email);
    const accountId = await sendEmailOTP({email});

    if (!accountId) throw new Error("Failed to send an OTP");
    if(!existingUser) {
        const {databases} = await createAdminClient();

        await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                fullName,
                email,
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fuser-avatar%2F&psig=AOvVaw32bUtco1TVvTEhu2W3MfoK&ust=1735435311769000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMClj72myYoDFQAAAAAdAAAAABAO',
                accountId,
            },
        );
    }

    return parseStringify({accountId});
};

export const verifySecret = async({accountId, password} : {accountId:string; password:string;}) => {
    try {
        const {account} = await createAdminClient();  
        const session = await account.createSession(accountId, password);
        
        (await cookies()).set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify({sessionId: session.$id});
    } catch (error) {
        handleError(error, "Failed to verify OTP")
    }
};