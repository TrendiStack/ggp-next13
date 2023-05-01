import {
  Body,
  Button,
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
import ggplogo from '../assets/images/ggplogo.png';
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
                src={ggplogo}
                width="40"
                height="37"
                alt="ggp logo"
                className="my-0 mx-auto"
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

              {form.date && (
                <Text className="text-black text-[14px] leading-[24px]">
                  Date: {form.date}
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
                Message: {form.message}
              </Text>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
