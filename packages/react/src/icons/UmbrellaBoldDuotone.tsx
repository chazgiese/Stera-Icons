import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UmbrellaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UmbrellaBoldDuotone = memo(
  forwardRef<SVGSVGElement, UmbrellaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12.5q.48 0 1 .13v6.87a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.87a4 4 0 0 1 1-.13M12 1a1 1 0 0 1 1 1v1.05a10 10 0 0 0-2 0V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 3a10 10 0 0 1 10 10 1 1 0 0 1-1.84.55A2.6 2.6 0 0 0 18 12.5c-.48 0-.75.1-.96.24-.22.16-.44.4-.7.8a1 1 0 0 1-1.68 0 2.3 2.3 0 0 0-1.03-.7A5 5 0 0 0 12 12.5c-.5 0-1.1.12-1.63.34-.56.23-.9.5-1.03.7a1 1 0 0 1-1.68 0c-.26-.4-.48-.64-.7-.8-.2-.13-.49-.24-.96-.24-.99 0-1.78.46-2.16 1.05A1 1 0 0 1 2 13 10 10 0 0 1 12 3m0 2a8 8 0 0 0-7.69 5.8q.8-.3 1.69-.3a3.6 3.6 0 0 1 2.6 1.03q.5-.33 1-.54a7 7 0 0 1 2.4-.49 6.5 6.5 0 0 1 3.4 1.03q.23-.24.53-.44A3.6 3.6 0 0 1 18 10.5q.9 0 1.69.3A8 8 0 0 0 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

UmbrellaBoldDuotone.displayName = 'UmbrellaBoldDuotone';

export { UmbrellaBoldDuotone };
export type { UmbrellaBoldDuotoneProps };
