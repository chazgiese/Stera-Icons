import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtSignRegularProps = Omit<IconBaseProps, 'children'>;

const AtSignRegular = memo(
  forwardRef<SVGSVGElement, AtSignRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 0 1 10.7 11.82c-.28 2.77-2 4.42-3.91 4.41-1.4 0-2.61-.88-3.18-2.4A4.74 4.74 0 0 1 7.25 12a4.75 4.75 0 0 1 8-3.46V8a.75.75 0 0 1 1.5 0v5c0 2.2 1.15 2.98 2.04 2.98.93 0 2.2-.82 2.41-3.05q.05-.46.05-.93a9.25 9.25 0 1 0-4.63 8.01.75.75 0 0 1 .76 1.3A10.75 10.75 0 1 1 12 1.25m0 7.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignRegular.displayName = 'AtSignRegular';

export { AtSignRegular };
export type { AtSignRegularProps };
