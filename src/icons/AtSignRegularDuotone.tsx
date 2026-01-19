import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtSignRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtSignRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="at-sign-duotone" {...props}>
      <path fill="currentColor" d="M12 1.25a10.75 10.75 0 0 1 10.7 11.82c-.26 2.63-1.82 4.25-3.64 4.4a.75.75 0 1 0-.12-1.5c.9-.07 2.05-.92 2.26-3.04q.05-.46.05-.93a9.25 9.25 0 1 0-4.63 8.01.75.75 0 0 1 .76 1.3A10.75 10.75 0 1 1 12 1.25" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16 7.25c.41 0 .75.34.75.75v5c0 1.16.33 1.92.74 2.38s.94.64 1.45.6a.75.75 0 0 1 .12 1.49c-.98.08-1.96-.3-2.68-1.09q-.48-.53-.78-1.29A4.74 4.74 0 0 1 7.25 12a4.75 4.75 0 0 1 8-3.46V8c0-.41.34-.75.75-.75m-4 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignRegularDuotone.displayName = 'AtSignRegularDuotone';

// Triple export pattern (lucide-react style)
export { AtSignRegularDuotone, AtSignRegularDuotone as AtSignRegularDuotoneIcon, AtSignRegularDuotone as SiAtSignRegularDuotone };
export type { AtSignRegularDuotoneProps };
