import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { ApiResponse } from "@/utils/api-response";

export async function POST(request: Request) {
  try {
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return ApiResponse(400, "Missing required fields!");
    }

    const user: typeof usersTable.$inferInsert = {
      name,
      email,
      clerkId,
    };

    const response = await db.insert(usersTable).values(user);

    return ApiResponse(200, "Success", response);
  } catch (error) {
    console.log(error);
    return ApiResponse(500, `${error}`);
  }
}
