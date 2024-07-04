"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { signIn } from "next-auth/react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export default function LoginForm() {
  // const query = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(values: z.infer<typeof formSchema>) {
    /* try {
      // Validate form values using the schema
      formSchema.parse(values);
      try {
        setIsLoading(true);
        const result = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        // console.log(result);
        if (result?.error) {
          toast.error("Login Failed", {
            description: "Invalid Credentials, Please try again.",
            position: "top-center",
          });
          return;
        } else {
          toast.success("Successfully logged in.", {
            description: "We are now redirecting you to dashboard.",
            position: "top-center",
          });
          if (query.has("redirect")) {
            router.push(query?.get("redirect") as string);
          } else {
            router.push("/dashboard");
          }
        }
      } catch (error: any) {
        // Handle errors
        toast.error("Failed.", {
          description: error.response?.data?.message,
          position: "top-center",
        });
        console.error(
          "An Axios error occurred:",
          error.response?.data?.message
        );
      } finally {
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Form validation error:", error);
      toast.error("Failed.", {
        description: "Something went wrong with the form.",
        position: "top-center",
      });
    } */
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="xl:space-y-6 lg:space-y-4 space-y-3 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••"
                  type="password"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-[#344054] 2xl:text-sm text-xs cursor-pointer"
            >
              Remember for 30 days
            </label>
          </div>

          <Link
            href={`/auth/forgot-password`}
            className="2xl:text-sm text-xs text-[#323333]"
          >
            Forgot password
          </Link>
        </div>

        <Button className="w-full 2xl:text-sm text-xs mb-0" type="submit">
          {isLoading ? (
            <div className="animate-spin h-5 w-5 rounded-full mr-3 border-t-2" />
          ) : (
            "Sign in"
          )}
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() => signIn("google")}
          className="w-full flex justify-center gap-2 2xl:text-sm text-xs"
        >
          <Image
            alt=""
            width={24}
            height={24}
            className="2xl:h-6 xl:w-6 lg:h-4 lg:w-4 sm:h-3 sm:w-3"
            src="/icons/google.svg"
          ></Image>
          <span>Sign in with Google</span>
        </Button>

        <p className="text-center 2xl:text-sm lg:text-xs">
          Don&apos;t have an account?{" "}
          <Link href={`/auth/register`} className="text-[#323333] font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
}
