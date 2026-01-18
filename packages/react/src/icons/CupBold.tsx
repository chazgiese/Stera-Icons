import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CupBoldProps = Omit<IconBaseProps, 'children'>;

const CupBold = memo(
  forwardRef<SVGSVGElement, CupBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.5 3c2.4 0 4.6.23 6.24.61.8.2 1.53.43 2.08.74C19.28 4.6 20 5.12 20 6v.09l-.01.09-.13 1.84A3.5 3.5 0 0 1 19.5 15h-.27a8 8 0 0 1-7.75 6H9.52a8 8 0 0 1-7.98-7.43L1 6.17v-.1L1 6c0-.88.72-1.4 1.18-1.65.55-.3 1.27-.55 2.08-.74C5.9 3.23 8.1 3 10.5 3m7.35 5.07q-.52.18-1.11.32C15.1 8.77 12.9 9 10.5 9s-4.6-.23-6.24-.61q-.6-.14-1.11-.32l.38 5.36A6 6 0 0 0 9.52 19h1.96a6 6 0 0 0 5.99-5.57zM19.5 13a1.5 1.5 0 0 0 .21-2.98zm-9-8c-2.3 0-4.34.22-5.78.56q-.9.22-1.38.44.48.23 1.38.44C6.16 6.78 8.2 7 10.5 7s4.34-.22 5.78-.56A8 8 0 0 0 17.65 6a8 8 0 0 0-1.37-.44A27 27 0 0 0 10.5 5" clipRule="evenodd" />
    </IconBase>
  ))
);

CupBold.displayName = 'CupBold';

export { CupBold };
export type { CupBoldProps };
