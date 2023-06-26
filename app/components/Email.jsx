import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import * as React from 'react';

const Email = ({ form }) => {
  const previewText = `Message from ${form.name}`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-email-image.png"
                width="300"
                height="120"
                alt="ggp logo"
                className="h-full mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Authentic <strong>Sicilian</strong> Flavour
            </Heading>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px]">
              New message in from {form.name}
            </Text>
            <Section>
              {form.subject && (
                <Text className="text-black text-[14px] leading-[24px]">
                  Subject: {form.subject}
                </Text>
              )}

              <Text className="text-black text-[14px] leading-[24px]">
                Phone: {form.phone}
              </Text>

              <Text className="text-black text-[14px] leading-[24px]">
                Email:{' '}
                <Link
                  href={`mailto:${form.email}`}
                  className="text-blue-600 no-underline"
                >
                  {form.email}
                </Link>
              </Text>

              {form.date && form.date !== 'Invalid Date' && (
                <Text className="text-black text-[14px] leading-[24px]">
                  {form.cart ? 'Pickup' : 'Date'}: {form.date}
                </Text>
              )}
              {form.time && (
                <Text className="text-black text-[14px] leading-[24px]">
                  Time: {form.time}
                </Text>
              )}
              {form.guests && (
                <Text className="text-black text-[14px] leading-[24px]">
                  Guests: {form.guests}
                </Text>
              )}

              <Text className="text-black text-[14px] leading-[24px]">
                Special Instructions: {form.message}
              </Text>

              {form.cart && (
                <Section className="mt-[32px]">
                  <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                    Cake Order
                  </Heading>
                  {form.cart?.map((cake, index) => (
                    <Section key={index} className="mt-[24px]">
                      <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                      <Text className="text-black text-lg font-medium leading-[24px]">
                        Cake {index + 1}
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                        Flavour: {cake.flavour}
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                        Shape: {cake.shape}
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                        Size: {cake.size}
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                        quantity: {cake.quantity}
                      </Text>
                    </Section>
                  ))}
                </Section>
              )}
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
