import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowerFillProps = Omit<IconBaseProps, 'children'>;

const FlowerFill = memo(
  forwardRef<SVGSVGElement, FlowerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.88 2.95a3.9 3.9 0 0 1 4.62-.37c1.7.97 2.27 2.6 1.99 4.16q-.1.62-.39 1.2.65.06 1.26.28A3.9 3.9 0 0 1 23 12a3.9 3.9 0 0 1-2.64 3.78 5 5 0 0 1-1.26.27q.28.6.39 1.21a3.85 3.85 0 0 1-2 4.16c-1.7.97-3.4.64-4.6-.37q-.51-.41-.9-.96-.37.55-.87.96a3.9 3.9 0 0 1-4.62.37 3.85 3.85 0 0 1-1.99-4.15q.1-.63.39-1.22a5 5 0 0 1-1.26-.27A3.9 3.9 0 0 1 1 12a3.9 3.9 0 0 1 2.64-3.78q.6-.22 1.26-.28-.28-.58-.39-1.2a3.85 3.85 0 0 1 2-4.16c1.7-.97 3.4-.64 4.6.37q.51.41.89.96.38-.55.88-.96M12 9.05c-1.06 0-2.08.58-2.6 1.48-.52.88-.55 2 0 2.94a3 3 0 0 0 2.6 1.48c1.06 0 2.08-.58 2.6-1.48.52-.88.55-2 0-2.94A3 3 0 0 0 12 9.05" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerFill.displayName = 'FlowerFill';

export { FlowerFill };
export type { FlowerFillProps };
