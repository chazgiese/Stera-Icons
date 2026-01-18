import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowerFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.5 2.58c1.7-.97 3.4-.64 4.62.37q.5.41.88.96.38-.55.88-.96a3.9 3.9 0 0 1 4.62-.37c1.7.97 2.27 2.6 1.99 4.16q-.1.62-.39 1.2.65.06 1.26.28A3.9 3.9 0 0 1 23 12a3.9 3.9 0 0 1-2.64 3.78 5 5 0 0 1-1.26.27q.28.6.39 1.21a3.85 3.85 0 0 1-2 4.16c-1.7.97-3.4.64-4.6-.37q-.51-.41-.9-.96-.37.55-.87.96a3.9 3.9 0 0 1-4.62.37 3.85 3.85 0 0 1-1.99-4.15q.1-.63.39-1.22a5 5 0 0 1-1.26-.27A3.8 3.8 0 0 1 1 12.36L1 12a3.9 3.9 0 0 1 2.64-3.78q.6-.23 1.26-.27-.28-.6-.39-1.22a3.85 3.85 0 0 1 2-4.15M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

FlowerFillDuotone.displayName = 'FlowerFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowerFillDuotone, FlowerFillDuotone as FlowerFillDuotoneIcon, FlowerFillDuotone as SiFlowerFillDuotone };
export type { FlowerFillDuotoneProps };
