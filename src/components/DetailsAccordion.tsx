import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";

type ProjectProp = {
  data: {
    id: string;
    rating: number;
    title: string;
    short_description: string;
    alt: string;
    thumbnail: {
      mobileSrc: string;
      desktopSrc: string;
    };
    live_url: string;
    github: string;
    type: string;
    status: string;
    stack: string[];
    category: string;
    features: string[];
  };
};

const DetailsAccordion = ({ data }: ProjectProp) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent asChild>
          <ul className='flex flex-col gap-2'>
            {data.features.map((feature, i) => (
              <li key={i} className=''>
                {feature}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Stack</AccordionTrigger>
        <AccordionContent asChild>
          <ul className='flex flex-col gap-2'>
            {data.stack.map((item, i) => (
              <li key={i} className=''>
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Status</AccordionTrigger>
        <AccordionContent>{data.status} </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailsAccordion;
