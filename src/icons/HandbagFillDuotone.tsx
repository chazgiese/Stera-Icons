import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandbagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagFillDuotone = memo(
  forwardRef<SVGSVGElement, HandbagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="handbag-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.25 8c1.25 0 2.17-.02 2.96.31a4 4 0 0 1 1.65 1.3c.51.68.72 1.57 1.02 2.78l.6 2.4q.38 1.49.56 2.48c.1.67.13 1.3-.06 1.91a4 4 0 0 1-1.75 2.24c-.55.33-1.17.46-1.84.52q-1 .07-2.54.06h-7.7q-1.54.02-2.54-.06a4 4 0 0 1-1.84-.52 4 4 0 0 1-1.75-2.24 4 4 0 0 1-.06-1.91q.17-1 .56-2.48l.6-2.4c.3-1.2.5-2.1 1.02-2.79A4 4 0 0 1 5.8 8.31C6.6 7.98 7.5 8 8.75 8z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a5 5 0 0 1 5 5v1.04A18 18 0 0 0 15.44 8H15V7a3 3 0 1 0-6 0v1h-.45q-.87-.01-1.55.04V7a5 5 0 0 1 5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagFillDuotone.displayName = 'HandbagFillDuotone';

// Triple export pattern (lucide-react style)
export { HandbagFillDuotone, HandbagFillDuotone as HandbagFillDuotoneIcon, HandbagFillDuotone as SiHandbagFillDuotone };
export type { HandbagFillDuotoneProps };
