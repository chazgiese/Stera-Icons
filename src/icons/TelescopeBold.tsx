import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TelescopeBoldProps = Omit<IconBaseProps, 'children'>;

const TelescopeBold = memo(
  forwardRef<SVGSVGElement, TelescopeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="telescope-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.44-1.59 2.76l-1.69.45c-.86.23-1.74.06-2.43-.4l-1.6.3a3 3 0 0 1-.77 2.71l2.73 5.47a1 1 0 0 1-1.78.9L12.38 16h-.76l-2.73 5.45a1 1 0 0 1-1.78-.9l2.73-5.47q-.64-.67-.8-1.6l-4.02.74a2.25 2.25 0 0 1-2.6-1.63L2 10.97a2.25 2.25 0 0 1 1.43-2.7l11.05-3.9a3 3 0 0 1 1.9-1.56zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7.92-1.85a.25.25 0 0 0-.15.3l.43 1.63q.08.2.29.18l1.74-.33-.63-2.37zm3.57-1.26.71 2.67 1.13-.2a3 3 0 0 1 4.25-.8l1.52-.29-.99-3.7zm10.93-4.6-1.69.45a1 1 0 0 0-.7 1.23l1.03 3.86a1 1 0 0 0 1.22.7l1.7-.44a.25.25 0 0 0 .17-.31l-1.42-5.31a.25.25 0 0 0-.31-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeBold.displayName = 'TelescopeBold';

// Triple export pattern (lucide-react style)
export { TelescopeBold, TelescopeBold as TelescopeBoldIcon, TelescopeBold as SiTelescopeBold };
export type { TelescopeBoldProps };
