import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenNibRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PenNibRegularDuotone = memo(
  forwardRef<SVGSVGElement, PenNibRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pen-nib-duotone" {...props}>
      <path fill="currentColor" d="M11.25 1.25v1.5h-.87c-2.16 2.92-4.3 6.45-5.19 9.46q-.71 2.37-.27 3.92c.29.96.96 1.72 2.3 2.16.32.1.53.38.53.71v1.75c0 .28.22.5.5.5h7.5a.5.5 0 0 0 .5-.5V19c0-.33.21-.61.52-.71 1.35-.44 2.02-1.2 2.3-2.16q.45-1.55-.26-3.92c-.9-3.01-3.03-6.54-5.19-9.46h-.87v-1.5h1.34q.32.04.51.3c2.27 3.02 4.64 6.86 5.65 10.24.5 1.68.69 3.35.27 4.77a4.5 4.5 0 0 1-2.77 2.96v1.23a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2v-1.23a4.5 4.5 0 0 1-2.77-2.96c-.42-1.42-.23-3.09.27-4.77 1-3.38 3.38-7.22 5.65-10.24l.06-.07a.8.8 0 0 1 .54-.23z" opacity={.4} />
        <path fill="currentColor" d="M12.75 10.88a2.25 2.25 0 1 1-1.5 0V1.25h1.5z" />
    </IconBase>
  ))
);

PenNibRegularDuotone.displayName = 'PenNibRegularDuotone';

// Triple export pattern (lucide-react style)
export { PenNibRegularDuotone, PenNibRegularDuotone as PenNibRegularDuotoneIcon, PenNibRegularDuotone as SiPenNibRegularDuotone };
export type { PenNibRegularDuotoneProps };
