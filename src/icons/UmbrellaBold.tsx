import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UmbrellaBoldProps = Omit<IconBaseProps, 'children'>;

const UmbrellaBold = memo(
  forwardRef<SVGSVGElement, UmbrellaBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="umbrella-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1v1.05A10 10 0 0 1 22 13a1 1 0 0 1-1.84.55A2.6 2.6 0 0 0 18 12.5c-.48 0-.75.1-.96.24-.22.16-.44.4-.7.8a1 1 0 0 1-1.68 0 2.3 2.3 0 0 0-1.03-.7q-.3-.12-.63-.2v6.86a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.87q-.33.09-.63.21c-.56.23-.9.5-1.03.7a1 1 0 0 1-1.68 0c-.26-.4-.48-.64-.7-.8-.2-.13-.49-.24-.96-.24-.99 0-1.78.46-2.16 1.05A1 1 0 0 1 2 13a10 10 0 0 1 9-9.95V2a1 1 0 0 1 1-1m0 4a8 8 0 0 0-7.69 5.8q.8-.3 1.69-.3a3.6 3.6 0 0 1 2.6 1.03q.5-.33 1-.54a7 7 0 0 1 2.4-.49 6.5 6.5 0 0 1 3.4 1.03q.23-.24.53-.44A3.6 3.6 0 0 1 18 10.5q.9 0 1.69.3A8 8 0 0 0 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

UmbrellaBold.displayName = 'UmbrellaBold';

// Triple export pattern (lucide-react style)
export { UmbrellaBold, UmbrellaBold as UmbrellaBoldIcon, UmbrellaBold as SiUmbrellaBold };
export default UmbrellaBold;
export type { UmbrellaBoldProps };
