export default eventHandler(async (event) => {
  console.log(await readBody(event));

  const { name, email, subject, message } = await readBody(event);

  if (!email) {
    return {
      code: 4000,
      message: '邮箱不能为空',
    };
  }

  try{
    const result = await useDrizzle()
      .insert(tables.contactForms)
      .values({
        name,
        email,
        subject,
        message,
        createdAt: new Date(),
      })
      .returning()
      .get();

    return {
      code: 2000,
      data: result,
      message: '提交成功',
    };
  }catch (e:any) {
    return {
      code: 5000,
      message: e.message,
    };
  }
});
