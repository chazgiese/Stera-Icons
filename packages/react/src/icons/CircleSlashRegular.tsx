import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CircleSlashRegularProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegular = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4M4.95 6A9.25 9.25 0 0 0 18 19.05zm13.6-.55A9.25 9.25 0 0 0 6 4.96l13.04 13.03a9.25 9.25 0 0 0-.5-12.53" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegular.displayName = 'CircleSlashRegular';

// Triple export pattern (lucide-react style)
export { CircleSlashRegular, CircleSlashRegular as CircleSlashRegularIcon, CircleSlashRegular as SiCircleSlashRegular };
export type { CircleSlashRegularProps };
