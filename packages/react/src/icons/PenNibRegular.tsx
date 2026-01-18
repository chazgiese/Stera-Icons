import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PenNibRegularProps = Omit<IconBaseProps, 'children'>;

const PenNibRegular = memo(
  forwardRef<SVGSVGElement, PenNibRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 1.25q.38 0 .6.3c2.27 3.02 4.64 6.86 5.65 10.24.5 1.68.69 3.35.27 4.77a4.5 4.5 0 0 1-2.77 2.96v1.23a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2v-1.23a4.5 4.5 0 0 1-2.77-2.96c-.42-1.42-.23-3.09.27-4.77 1-3.38 3.38-7.22 5.65-10.24q.22-.3.6-.3zm-3.62 1.5c-2.16 2.92-4.3 6.45-5.19 9.46q-.71 2.37-.27 3.92c.29.96.96 1.72 2.3 2.16.32.1.53.38.53.71v1.75c0 .28.22.5.5.5h7.5a.5.5 0 0 0 .5-.5V19c0-.33.21-.61.52-.71 1.35-.44 2.02-1.2 2.3-2.16q.45-1.55-.26-3.92c-.9-3.01-3.03-6.54-5.19-9.46h-.87v8.13a2.25 2.25 0 1 1-1.5 0V2.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

PenNibRegular.displayName = 'PenNibRegular';

// Triple export pattern (lucide-react style)
export { PenNibRegular, PenNibRegular as PenNibRegularIcon, PenNibRegular as SiPenNibRegular };
export type { PenNibRegularProps };
