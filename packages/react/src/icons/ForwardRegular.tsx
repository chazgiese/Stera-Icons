import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForwardRegularProps = Omit<IconBaseProps, 'children'>;

const ForwardRegular = memo(
  forwardRef<SVGSVGElement, ForwardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.71 3.3c.28-.11.6-.04.82.17l8 8c.3.3.3.77 0 1.06l-8 8a.75.75 0 0 1-1.28-.53v-4.75H11a8.3 8.3 0 0 0-5.75 2.06 8 8 0 0 0-1.55 1.97l-.01.02a.75.75 0 0 1-1.44-.3c0-3.79.62-6.45 2.43-8.11 1.67-1.54 4.19-2.07 7.57-2.13V4c0-.3.18-.58.46-.7m1.04 6.2c0 .41-.34.75-.75.75-3.74 0-5.97.51-7.3 1.74-1 .91-1.6 2.33-1.83 4.57q.18-.19.38-.37A9.8 9.8 0 0 1 11 13.75h2c.41 0 .75.34.75.75v3.69L19.94 12l-6.19-6.19z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardRegular.displayName = 'ForwardRegular';

// Triple export pattern (lucide-react style)
export { ForwardRegular, ForwardRegular as ForwardRegularIcon, ForwardRegular as SiForwardRegular };
export type { ForwardRegularProps };
