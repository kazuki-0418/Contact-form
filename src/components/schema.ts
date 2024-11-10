import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .nonempty({ message: "Email is required" }),
  queryType: z.string().min(1, { message: "Please select a query type" }),
  message: z.string().min(1, { message: "This field is required" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "To submit this form, please consent to being contacted",
  }),
});

export default schema;
