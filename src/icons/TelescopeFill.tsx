import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TelescopeFillProps = Omit<IconBaseProps, 'children'>;

const TelescopeFill = memo(
  forwardRef<SVGSVGElement, TelescopeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="telescope-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.43-1.59 2.76l-1.69.45c-.86.23-1.74.06-2.43-.4l-1.6.3a3 3 0 0 1-.77 2.71l2.73 5.47a1 1 0 0 1-1.78.9l-2.74-5.47a3 3 0 0 1-.74 0l-2.74 5.47a1 1 0 0 1-1.78-.9l2.73-5.47c-.42-.43-.7-.99-.8-1.6l-4.02.74a2.25 2.25 0 0 1-2.59-1.62l-.44-1.63a2.25 2.25 0 0 1 1.43-2.7l11.05-3.9a3 3 0 0 1 1.9-1.56zM12 12a1 1 0 1 0 .73.32A1 1 0 0 0 12 12m-7.92-1.85a.25.25 0 0 0-.15.3l.43 1.63q.08.2.29.18l1.74-.33-.63-2.37zm14.5-5.86-1.69.45a1 1 0 0 0-.7 1.23l1.03 3.86a1 1 0 0 0 1.22.7l1.7-.45a.25.25 0 0 0 .17-.3l-1.42-5.31a.25.25 0 0 0-.31-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeFill.displayName = 'TelescopeFill';

// Triple export pattern (lucide-react style)
export { TelescopeFill, TelescopeFill as TelescopeFillIcon, TelescopeFill as SiTelescopeFill };
export type { TelescopeFillProps };
