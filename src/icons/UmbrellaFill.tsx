import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type UmbrellaFillProps = Omit<IconBaseProps, 'children'>;

const UmbrellaFill = memo(
  forwardRef<SVGSVGElement, UmbrellaFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="umbrella-fill" {...props}>
      <path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v1.05A10 10 0 0 1 22 13a1 1 0 0 1-1.84.55A2.6 2.6 0 0 0 18 12.5c-.48 0-.75.1-.96.24-.22.16-.44.4-.7.8a1 1 0 0 1-1.68 0 2.3 2.3 0 0 0-1.03-.7q-.3-.12-.63-.2v6.86a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.87q-.33.09-.63.21c-.56.23-.9.5-1.03.7a1 1 0 0 1-1.68 0c-.26-.4-.48-.64-.7-.8-.2-.13-.49-.24-.96-.24-.99 0-1.78.46-2.16 1.05A1 1 0 0 1 2 13a10 10 0 0 1 9-9.95V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

UmbrellaFill.displayName = 'UmbrellaFill';

// Triple export pattern (lucide-react style)
export { UmbrellaFill, UmbrellaFill as UmbrellaFillIcon, UmbrellaFill as SiUmbrellaFill };
export default UmbrellaFill;
export type { UmbrellaFillProps };
