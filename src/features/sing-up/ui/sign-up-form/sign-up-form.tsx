import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FormFieldWrapper } from '@/shared/components/form-field-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui/card';
import { ContentWithLoader } from '@/shared/components/content-with-loader';
import { RoutesPath } from '@/shared/consts/router-consts';
import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';

import { SignUpFormSchemaType } from '../../model/types/validation-schema-types';
import { SignUpFormSchema } from '../../model/validation-schema/sign-up-form-schema';
import { useSignUp } from '../../lib/hooks/use-sign-up';

interface AuthFormProps {
  className?: string;
}

export const SignUpForm: FC<AuthFormProps> = ({ className }) => {
  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { email: '', password: '' },
  });

  const signUpCb = useSignUp();

  return (
    <Card className={cn('w-4/6 md:w-1/3', className)}>
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your login below to proceed to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <Stack direction="vertical" as="form" onSubmit={form.handleSubmit(signUpCb)}>
            <FormFieldWrapper form={form} name="email" label="Email">
              {({ field, formState }) => (
                <Input
                  {...field}
                  placeholder="example@mail.com"
                  disabled={formState.isSubmitting}
                />
              )}
            </FormFieldWrapper>
            <FormFieldWrapper form={form} name="username" label="Username">
              {({ field, formState }) => (
                <Input
                  {...field}
                  disabled={formState.isSubmitting}
                  placeholder="Your preferred username"
                />
              )}
            </FormFieldWrapper>
            <FormFieldWrapper form={form} name="password" label="Password">
              {({ field, formState }) => (
                <Input
                  {...field}
                  type="password"
                  disabled={formState.isSubmitting}
                  placeholder="Password"
                />
              )}
            </FormFieldWrapper>
            <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
              <ContentWithLoader content="Sign Up" isLoading={form.formState.isSubmitting} />
            </Button>
            <div className="mt-4 text-center text-sm">
              Already have an account?
              {' '}
              <Link to={RoutesPath.getRouteSignIn()} className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </Stack>
        </Form>
      </CardContent>
    </Card>
  );
};
