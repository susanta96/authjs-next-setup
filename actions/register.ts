"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import * as bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, name, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }
  // hasing the password
  const hasedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hasedPassword,
    },
  });

  // TODO: send email to user with a link to verify their email

  return { success: "User Created!" };
};
