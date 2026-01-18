import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LineWeightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LineWeightRegularDuotone = memo(
  forwardRef<SVGSVGElement, LineWeightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 7c.97 0 1.75.78 1.75 1.75v1.5c0 .97-.78 1.75-1.75 1.75H5c-.97 0-1.75-.78-1.75-1.75v-1.5C3.25 7.78 4.03 7 5 7zM5 8.5a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25h14q.23-.02.25-.25v-1.5A.25.25 0 0 0 19 8.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.75 14.25a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H5.25a2 2 0 0 1-2-2v-2.5c0-1.1.9-2 2-2zm-13.5 1.5a.5.5 0 0 0-.5.5v2.5c0 .28.22.5.5.5h13.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
        <path fill="currentColor" d="M20 3.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

LineWeightRegularDuotone.displayName = 'LineWeightRegularDuotone';

// Triple export pattern (lucide-react style)
export { LineWeightRegularDuotone, LineWeightRegularDuotone as LineWeightRegularDuotoneIcon, LineWeightRegularDuotone as SiLineWeightRegularDuotone };
export type { LineWeightRegularDuotoneProps };
