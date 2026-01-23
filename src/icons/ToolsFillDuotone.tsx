import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolsFillDuotone = memo(
  forwardRef<SVGSVGElement, ToolsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tools-fill-duotone" {...props}>
      <path d="M6.2 13.02q.72.12 1.45.06l3.27 3.27q-.06.72.06 1.46L7.78 21A3.39 3.39 0 0 1 3 16.2zM19.8 2.07a1 1 0 0 1 1.06.22l.85.85a1 1 0 0 1 .15 1.22l-1.27 2.1a1 1 0 0 1-1.56.2l-.14-.14L15.42 10 14 8.58l3.46-3.47-.13-.14a1 1 0 0 1 .19-1.56l2.11-1.27z" opacity={0.4} />
        <path fill="currentColor" d="M6.03 2.9a4.42 4.42 0 0 1 5.45 5.28l4.34 4.33a4.42 4.42 0 0 1 5.28 5.46.3.3 0 0 1-.18.18.3.3 0 0 1-.24-.07l-1.38-1.37h-2.6v2.6l1.38 1.37q.11.11.07.24a.3.3 0 0 1-.18.18 4.42 4.42 0 0 1-5.46-5.28l-4.33-4.34A4.42 4.42 0 0 1 2.9 6.03l.03-.06q.04-.09.15-.12.14-.03.24.07L4.7 7.3h2.6V4.7L5.92 3.32a.3.3 0 0 1-.07-.24q.05-.14.18-.18" />
    </IconBase>
  ))
);

ToolsFillDuotone.displayName = 'ToolsFillDuotone';

// Triple export pattern (lucide-react style)
export { ToolsFillDuotone, ToolsFillDuotone as ToolsFillDuotoneIcon, ToolsFillDuotone as SiToolsFillDuotone };
export default ToolsFillDuotone;
export type { ToolsFillDuotoneProps };
