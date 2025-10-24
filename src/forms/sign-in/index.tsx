"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import {
  Mail,
  Lock,
  Palette,
  Users,
  Cloud,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Google, Github } from "@/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const signInSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address.")
    .min(5, "Email must be at least 5 characters."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(50, "Password too long."),
  remember: z.boolean().optional(),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

interface SignInFormProps {
  onSubmit: (values: SignInFormValues) => Promise<void> | void;
  loading?: boolean;
}

export default function SignInForm({ onSubmit, loading }: SignInFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const handleFormSubmit = handleSubmit(async (values) => {
    await onSubmit(values);
  });

  const isLoading = loading ?? isSubmitting;

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4">
      <div className="z-10 w-full max-w-6xl">
        <div className="bg-background overflow-hidden rounded-[40px] shadow-2xl">
          <div className="grid min-h-[700px] lg:grid-cols-2">
            {/* --- Left Side --- */}
            <div className="brand-side relative m-4 rounded-3xl bg-[url('https://cdn.midjourney.com/299f94f9-ecb9-4b26-bead-010b8d8b01d9/0_0.webp?w=800&q=80')] bg-cover p-12 text-white">
              <div>
                <div className="mb-12 text-lg font-semibold uppercase">
                  PixelForge Studio
                </div>
                <h1 className="mb-4 text-6xl font-medium">
                  Create, Design, and Innovate
                </h1>
                <p className="mb-12 text-xl opacity-80">
                  Join thousands of creators who trust PixelForge Studio to
                  bring their vision to life.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Palette size={16} />,
                      title: "Advanced Design Tools",
                      desc: "Professional-grade tools for every project",
                    },
                    {
                      icon: <Users size={16} />,
                      title: "Team Collaboration",
                      desc: "Work together seamlessly in real-time",
                    },
                    {
                      icon: <Cloud size={16} />,
                      title: "Cloud Storage",
                      desc: "Access your projects from anywhere",
                    },
                    {
                      icon: <ShieldCheck size={16} />,
                      title: "Enterprise Security",
                      desc: "Bank-level security for your data",
                    },
                  ].map(({ icon, title, desc }, i) => (
                    <div
                      key={i}
                      className="feature-item animate-fadeInUp flex items-center"
                      style={{ animationDelay: `${0.2 * (i + 1)}s` }}
                    >
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
                        {icon}
                      </div>
                      <div>
                        <div className="font-semibold">{title}</div>
                        <div className="text-sm opacity-70">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Right Side --- */}
            <div className="flex flex-col justify-center p-12">
              <div className="mx-auto w-full max-w-md">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl uppercase">Welcome back</h2>
                  <p className="mt-2 text-sm text-stone-600">
                    Sign in to continue your creative journey
                  </p>
                </div>

                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <FieldSet>
                    <FieldGroup>
                      {/* Email Field */}
                      <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <InputGroup className="h-10 border-border bg-input">
                              <InputGroupInput
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="autofill:bg-transparent"
                                aria-invalid={fieldState.invalid}
                                {...field}
                              />
                              <InputGroupAddon>
                                <Mail className="h-5 w-5 text-gray-400" />
                              </InputGroupAddon>
                            </InputGroup>
                            {fieldState.error && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      {/* Password Field */}
                      <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="password">Password</FieldLabel>
                            <InputGroup className="h-10 border-border bg-input">
                              <InputGroupInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="autofill:!bg-white autofill:!text-black"
                                aria-invalid={fieldState.invalid}
                                {...field}
                              />
                              <InputGroupAddon>
                                <Lock className="h-5 w-5 text-gray-400" />
                              </InputGroupAddon>
                              <InputGroupAddon align="inline-end">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <InputGroupButton
                                      variant="ghost"
                                      aria-label="Toggle password visibility"
                                      size="icon-xs"
                                      onClick={() =>
                                        setShowPassword(!showPassword)
                                      }
                                    >
                                      {showPassword ? (
                                        <Eye size={16} />
                                      ) : (
                                        <EyeOff size={16} />
                                      )}
                                    </InputGroupButton>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>
                                      {showPassword
                                        ? "Hide password"
                                        : "Show password"}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </InputGroupAddon>
                            </InputGroup>
                            {fieldState.error && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      {/* Remember me */}
                      <Controller
                        name="remember"
                        control={control}
                        render={({ field }) => (
                          <div className="flex items-center justify-between">
                            <Field
                              orientation="horizontal"
                              className="text-muted-foreground text-sm"
                            >
                              <Checkbox
                                id="remember-me"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                              <FieldLabel
                                className="font-normal"
                                htmlFor="remember-me"
                              >
                                Remember me
                              </FieldLabel>
                            </Field>

                            <Link
                              href="#"
                              className="text-primary whitespace-nowrap hover:text-primary/80 text-sm"
                            >
                              Forgot password?
                            </Link>
                          </div>
                        )}
                      />

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        isLoading={isLoading}
                      >
                        {isLoading
                          ? "Signing in..."
                          : "Sign in to your account"}
                      </Button>

                      {/* OAuth Divider */}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <hr className="border-border flex-1" />
                        <span className="relative px-2">Or continue with</span>
                        <hr className="border-border flex-1" />
                      </div>

                      {/* OAuth Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button"
                          size="lg"
                          variant="secondary"
                          className="border-border rounded-lg border px-4 py-2.5 text-sm shadow-sm"
                        >
                          <Google className="size-5" />
                          <span className="ml-2">Google</span>
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          variant="secondary"
                          className="border-border rounded-lg border px-4 py-2.5 text-sm shadow-sm"
                        >
                          <Github className="size-5" />
                          <span className="ml-2">GitHub</span>
                        </Button>
                      </div>
                    </FieldGroup>
                  </FieldSet>
                </form>

                <div className="text-muted-foreground mt-8 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="text-primary hover:text-primary/80">
                    Sign up for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
