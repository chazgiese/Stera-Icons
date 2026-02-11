import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerFillProps = Omit<IconBaseProps, 'children'>;

const FlowerFill = memo(
  forwardRef<SVGSVGElement, FlowerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flower-fill" {...props}>
      <path fillRule="evenodd" d="M12.9 4.06a3.4 3.4 0 0 1 3.97-.31 3.3 3.3 0 0 1 1.72 3.55 4 4 0 0 1-.43 1.22q.68.03 1.31.25A3.3 3.3 0 0 1 21.75 12c0 1.68-1 2.78-2.28 3.23q-.63.22-1.3.25.3.59.42 1.22a3.3 3.3 0 0 1-1.72 3.55 3.4 3.4 0 0 1-3.98-.3 4 4 0 0 1-.9-1.02 4 4 0 0 1-.88 1.01 3.4 3.4 0 0 1-3.98.31 3.3 3.3 0 0 1-1.72-3.55q.11-.63.43-1.22-.69-.03-1.31-.25A3.3 3.3 0 0 1 2.25 12c0-1.68 1-2.78 2.28-3.23q.62-.22 1.3-.25a4 4 0 0 1-.42-1.22 3.3 3.3 0 0 1 1.72-3.55 3.4 3.4 0 0 1 3.98.3q.51.44.89 1.02.38-.59.9-1.01M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerFill.displayName = 'FlowerFill';

// Triple export pattern (lucide-react style)
export { FlowerFill, FlowerFill as FlowerFillIcon, FlowerFill as SiFlowerFill };
export default FlowerFill;
export type { FlowerFillProps };
