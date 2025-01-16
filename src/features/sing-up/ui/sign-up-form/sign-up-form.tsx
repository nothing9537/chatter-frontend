import { FC, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FormFieldWrapper } from '@/shared/components/form-field-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui/card';
import { TextWithLoader } from '@/shared/components/text-with-loader';
import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Form } from '@/shared/ui/form';
import { Stack } from '@/shared/ui/stack';

import { RoutesPath } from '@/shared/consts/router-consts';
import { SignUpFormSchemaType } from '../../model/types/validation-schema-types';
import { SignUpFormSchema } from '../../model/validation-schema/sign-up-form-schema';

interface AuthFormProps {
  className?: string;
}

export const SignUpForm: FC<AuthFormProps> = ({ className }) => {
  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = useCallback((values: SignUpFormSchemaType) => {
    console.log(values);

    return new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  }, []);

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
          <Stack direction="vertical" as="form" onSubmit={form.handleSubmit(onSubmit)}>
            <FormFieldWrapper form={form} name="username" label="Login">
              {({ field, formState }) => (
                <Input
                  {...field}
                  placeholder="john-doe"
                  disabled={formState.isSubmitting}
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
            <FormFieldWrapper form={form} name="confirmPassword" label="Confirmation Password">
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
              <TextWithLoader text="Sign Up" isLoading={form.formState.isSubmitting} />
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
