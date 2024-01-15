import { CheckCircledIcon } from '@radix-ui/react-icons';

interface Props {
    message?: string;
}

export const FormSucess = ({ message }: Props) => {
    if(!message) return null;
    return (
        <div className='rounded-md flex bg-emerald-500/15 p-3 items-center gap-x-2 text-sm text-emerald-500'>
            <CheckCircledIcon className='h-4 w-4' />
            <p>{message}</p>
        </div>
    )
}