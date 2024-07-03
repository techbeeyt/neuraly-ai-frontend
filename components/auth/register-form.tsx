"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cms, http } from "@/lib/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { signIn } from "next-auth/react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const query = useSearchParams();
  const [cmsUserInfo, setCmsUserInfo] = useState(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  /* useEffect(() =>
    {
        if (cmsUserInfo) {
            cms.post('/user-lists', {
                data: { name: `${cmsUserInfo?.firstName} ${cmsUserInfo?.lastName}`, email: cmsUserInfo?.email }
            }).then(res =>
            {
                // console.log(res);
            }).catch(err =>
            {
                console.log(err);
            })
        }
    }, [cmsUserInfo]) */

  async function handleRegister(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      formSchema.parse(values);
      const result = await http.post("/auth/register", values);
      if (result?.status === 201) {
        toast.success(`Hello ${values.firstName} ${values.lastName}.`, {
          description:
            "You successfully registered new account with us. We are now logging you in.",
          position: "top-center",
        });
        /* setCmsUserInfo({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email
                }); */
        // router.push('/auth/login');
        const loginResult: any = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if (loginResult?.error) {
          toast.error("Login Failed", {
            description: loginResult?.error,
            position: "top-center",
          });
          return;
        } else {
          toast.success("Successfully logged in.", {
            description: "We are now redirecting you to dashboard.",
            position: "top-center",
          });
          if (query.has("redirect")) {
            router.push(query.get("redirect") as string);
          } else {
            router.push("/dashboard");
          }
        }
      }
    } catch (error: any) {
      // console.error('Form validation error:', error);
      toast.error("Failed.", {
        description: error.response?.data?.message,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleRegister)}
        className="space-y-4 w-full"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
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

        <Button className="w-full  mb-0" type="submit">
          {isLoading ? (
            <div className="animate-spin h-5 w-5 rounded-full mr-3 border-t-2" />
          ) : (
            "Get started"
          )}
        </Button>

        <Button
          onClick={() => signIn("google")}
          type="button"
          variant="outline"
          className="w-full flex justify-center gap-2"
        >
          <Image alt="" width={24} height={24} src="/icons/google.svg"></Image>
          <span>Sign up with Google</span>
        </Button>

        <p className="text-center">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#323333] font-medium">
            Log in
          </Link>
        </p>
      </form>
    </Form>
  );
}
