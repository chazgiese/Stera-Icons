import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BracketsCurlyCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-circle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.5 6.75a.75.75 0 0 1 0 1.5h-.6a.16.16 0 0 0-.15.16v1.5c0 .8-.32 1.55-.86 2.09.54.54.86 1.28.86 2.08v1.51q.01.15.16.16h.59a.75.75 0 0 1 0 1.5h-.6c-.9 0-1.65-.74-1.65-1.66v-1.5c0-.63-.4-1.18-.99-1.38a.75.75 0 0 1 0-1.42c.6-.2.99-.75.99-1.37V8.4c0-.92.74-1.66 1.66-1.66zM15.1 6.75c.9 0 1.65.74 1.65 1.66v1.5c0 .63.4 1.18.99 1.38a.75.75 0 0 1 0 1.42c-.6.2-.99.75-.99 1.37v1.51c0 .92-.74 1.66-1.66 1.66h-.59a.75.75 0 0 1 0-1.5h.6q.13-.01.15-.16v-1.5c0-.8.32-1.55.86-2.09a3 3 0 0 1-.86-2.08V8.4a.16.16 0 0 0-.16-.16h-.59a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BracketsCurlyCircleRegularDuotone.displayName = 'BracketsCurlyCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircleRegularDuotone, BracketsCurlyCircleRegularDuotone as BracketsCurlyCircleRegularDuotoneIcon, BracketsCurlyCircleRegularDuotone as SiBracketsCurlyCircleRegularDuotone };
export type { BracketsCurlyCircleRegularDuotoneProps };
