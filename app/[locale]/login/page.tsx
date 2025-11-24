"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const locale = useLocale()
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      redirect: true,
      email: data.email,
      password: data.password,
      callbackUrl: `/${locale}`
    });

    if (res?.ok) router.push("/about");
    else if (res?.error) setError("Неверный email или пароль");
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Вход</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="email" className="mb-1">Email</Label>
              <Input id="email" type="email" {...register("email")} required />
            </div>
            <div>
              <Label htmlFor="password" className="mb-1">Пароль</Label>
              <Input id="password" type="password" {...register("password")} required />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full" disabled={loading} >
              {loading ? "Входим..." : "Войти"}
            </Button>
          </form>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => signIn("google", {
              callbackUrl: `/${locale}`
            })}
          >
            Войти с Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
