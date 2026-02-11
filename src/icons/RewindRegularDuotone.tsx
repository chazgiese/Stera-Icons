import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RewindRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RewindRegularDuotone = memo(
  forwardRef<SVGSVGElement, RewindRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rewind-duotone" {...props}>
      <path fillRule="evenodd" d="M10.41 6.02q.68.07 1.13.57l.12.14c.22.3.29.65.31.95q.04.47.03 1.15v6.34q0 .68-.03 1.15c-.02.3-.09.65-.31.95-.3.4-.75.66-1.25.7-.37.04-.7-.09-.98-.22q-.4-.2-.99-.56L3.15 14q-.55-.31-.92-.58c-.24-.17-.5-.4-.64-.73-.17-.39-.2-.83-.06-1.23l.06-.17.06-.12c.15-.27.37-.46.58-.61q.37-.27.92-.58l5.3-3.18q.57-.35.98-.56c.24-.12.53-.23.85-.23zm-.12 1.5-.2.08q-.28.14-.88.5l-5.29 3.17a12 12 0 0 0-.96.64.3.3 0 0 0 0 .18q0 .02.16.13c.17.13.41.27.8.5l5.3 3.18a13 13 0 0 0 1.07.58q.09 0 .15-.09.02-.02.04-.21.02-.31.02-1V8.82a13 13 0 0 0-.06-1.22.3.3 0 0 0-.15-.09" clipRule="evenodd" />
        <path fillRule="evenodd" d="M20.91 6.02q.68.07 1.13.57l.12.14c.22.3.29.65.31.95q.04.47.03 1.15v6.34q0 .68-.03 1.15c-.02.3-.09.65-.31.95-.3.4-.75.66-1.25.7-.37.04-.7-.09-.98-.22q-.4-.2-.99-.56L13.65 14q-.55-.31-.92-.58c-.24-.17-.5-.4-.64-.73-.17-.39-.2-.83-.06-1.23l.06-.17.06-.12q.24-.4.58-.61.37-.27.92-.58l5.3-3.18q.56-.35.98-.56c.24-.12.53-.23.85-.23zm-.12 1.5-.2.08q-.28.14-.88.5l-5.29 3.17a12 12 0 0 0-.96.64.3.3 0 0 0 0 .18q0 .02.16.13c.17.13.41.27.8.5l5.3 3.18a13 13 0 0 0 1.07.58q.09 0 .15-.09.02-.02.04-.21.02-.31.02-1V8.82a13 13 0 0 0-.06-1.22.3.3 0 0 0-.15-.09" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RewindRegularDuotone.displayName = 'RewindRegularDuotone';

// Triple export pattern (lucide-react style)
export { RewindRegularDuotone, RewindRegularDuotone as RewindRegularDuotoneIcon, RewindRegularDuotone as SiRewindRegularDuotone };
export default RewindRegularDuotone;
export type { RewindRegularDuotoneProps };
