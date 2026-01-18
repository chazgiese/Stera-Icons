import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TelescopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 4.37a3 3 0 0 0-.22 2.11l.02.08L7.65 8.9l.71 2.67 1.14-.2a3 3 0 0 0-.46 2.11l-2.13.4-1.67-6.25zM15.29 10.35c.2.73.65 1.33 1.24 1.72l-1.6.3a3 3 0 0 0-1.2-1.81l1.53-.29zM9.84 15.08q.72.74 1.79.9l-2.74 5.47a1 1 0 0 1-1.78-.9zM16.9 20.55a1 1 0 0 1-1.8.9l-2.73-5.47c.7-.09 1.32-.42 1.79-.9z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="m5.76 9.56-1.68.59a.25.25 0 0 0-.15.3l.43 1.63q.08.2.29.18l1.74-.33.52 1.94-1.9.35a2.25 2.25 0 0 1-2.58-1.63l-.44-1.62a2.25 2.25 0 0 1 1.43-2.7l1.82-.65z" />
        <path fill="currentColor" fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.43-1.59 2.76l-1.69.45a3 3 0 0 1-3.67-2.12l-1.04-3.87a3 3 0 0 1 2.12-3.67zm.52 1.93-1.69.45a1 1 0 0 0-.7 1.23l1.03 3.86a1 1 0 0 0 1.22.7l1.7-.45a.25.25 0 0 0 .17-.3l-1.42-5.31a.25.25 0 0 0-.31-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeBoldDuotone.displayName = 'TelescopeBoldDuotone';

export { TelescopeBoldDuotone };
export type { TelescopeBoldDuotoneProps };
