import { IMarkSheet } from 'src/app/type';

export const backendMarkSheet = async (): Promise<IMarkSheet[]> => {
  return [
    {
      name: 'Akash',
      marks: 10,
    },
    {
      name: 'Vikas',
      marks: 44,
    },
    {
      name: 'Pradnya',
      marks: 60,
    },
    {
      name: 'Viraj',
      marks: 69,
    },
    {
      name: 'Shad',
      marks: 89,
    },
  ];
};
