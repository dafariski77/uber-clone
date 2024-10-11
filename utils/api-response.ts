export const ApiResponse = <T>(
  code: number,
  message: string,
  data?: T
): Response => {
  return Response.json(
    {
      meta: {
        code,
        message,
      },
      data: data || null,
    },
    {
      status: code,
    }
  );
};
