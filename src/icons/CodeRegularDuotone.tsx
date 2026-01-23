import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CodeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-duotone" {...props}>
      <path fill="currentColor" d="M13.78 3.78a.75.75 0 0 1 1.44.44l-5 16a.75.75 0 0 1-1.44-.44z" opacity={.4} />
        <path fill="currentColor" d="M5.97 6.97a.75.75 0 1 1 1.06 1.06L3.06 12l3.97 3.97a.75.75 0 0 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06zM16.97 6.97c.3-.3.77-.3 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06L20.94 12l-3.97-3.97a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CodeRegularDuotone.displayName = 'CodeRegularDuotone';

// Triple export pattern (lucide-react style)
export { CodeRegularDuotone, CodeRegularDuotone as CodeRegularDuotoneIcon, CodeRegularDuotone as SiCodeRegularDuotone };
export default CodeRegularDuotone;
export type { CodeRegularDuotoneProps };
