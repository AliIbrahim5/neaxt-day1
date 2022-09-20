import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="MyApp " />
      <meta charset="UTF-8" />
      <meta name="copyright" content="Ali" />
      <meta name="author" content="Ali-alyahya" />
      <meta name="revised" content="today,sep 20th, 2022, 12:10 am" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </Head>
  );
};

Meta.defaultProps =  {
   title: 'WebDev News',
   keywords: 'web development programming',
   description: 'Get the latest news in web dev',


}
export default Meta;
