import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CirclePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M2.76 12.3a9.25 9.25 0 0 0 8.94 8.94zM3.8 7.7q-.65 1.23-.9 2.63L13.66 21.1a9 9 0 0 0 2.63-.91zm2.6-3.06A9 9 0 0 0 4.63 6.4l12.95 12.96a9 9 0 0 0 1.77-1.77zm3.92-1.74q-1.4.26-2.63.91L20.19 16.3q.65-1.23.9-2.63zm10.91 8.8a9.25 9.25 0 0 0-8.94-8.94z" />
    </IconBase>
  ))
);

CirclePlaceholderRegular.displayName = 'CirclePlaceholderRegular';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderRegular, CirclePlaceholderRegular as CirclePlaceholderRegularIcon, CirclePlaceholderRegular as SiCirclePlaceholderRegular };
export type { CirclePlaceholderRegularProps };
