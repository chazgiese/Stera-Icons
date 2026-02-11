import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeFillDuotone = memo(
  forwardRef<SVGSVGElement, CodeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-fill-duotone" {...props}>
      <path d="M12.56 4.59a1.5 1.5 0 0 1 2.88.82l-4 14a1.5 1.5 0 0 1-2.88-.82z" opacity={.4} />
        <path d="M5.94 6.94a1.5 1.5 0 1 1 2.12 2.12L5.12 12l2.94 2.94a1.5 1.5 0 0 1-2.12 2.12l-4-4a1.5 1.5 0 0 1 0-2.12zM15.94 6.94a1.5 1.5 0 0 1 2.12 0l4 4a1.5 1.5 0 0 1 0 2.12l-4 4a1.5 1.5 0 0 1-2.12-2.12L18.88 12l-2.94-2.94a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CodeFillDuotone.displayName = 'CodeFillDuotone';

// Triple export pattern (lucide-react style)
export { CodeFillDuotone, CodeFillDuotone as CodeFillDuotoneIcon, CodeFillDuotone as SiCodeFillDuotone };
export default CodeFillDuotone;
export type { CodeFillDuotoneProps };
