import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsCurlyCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 6.5a1 1 0 1 1 0 2H9v1.42c0 .78-.29 1.51-.77 2.08.48.57.77 1.3.77 2.08v1.42h.5a1 1 0 1 1 0 2h-.6A1.9 1.9 0 0 1 7 15.6v-1.52c0-.51-.33-.97-.82-1.13a1 1 0 0 1 0-1.9c.5-.16.82-.62.82-1.13V8.4c0-1.06.85-1.91 1.9-1.91zM15.1 6.5c1.05 0 1.9.85 1.9 1.9v1.52c0 .51.33.97.82 1.13a1 1 0 0 1 0 1.9 1.2 1.2 0 0 0-.82 1.13v1.51a1.9 1.9 0 0 1-1.9 1.91h-.6a1 1 0 1 1 0-2h.5v-1.42c0-.78.29-1.51.77-2.08A3.2 3.2 0 0 1 15 9.92V8.5h-.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsCurlyCircleBoldDuotone.displayName = 'BracketsCurlyCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircleBoldDuotone, BracketsCurlyCircleBoldDuotone as BracketsCurlyCircleBoldDuotoneIcon, BracketsCurlyCircleBoldDuotone as SiBracketsCurlyCircleBoldDuotone };
export type { BracketsCurlyCircleBoldDuotoneProps };
