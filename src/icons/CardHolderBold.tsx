import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CardHolderBoldProps = Omit<IconBaseProps, 'children'>;

const CardHolderBold = memo(
  forwardRef<SVGSVGElement, CardHolderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="card-holder-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.8 3q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V16q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H6q-1.02.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q.99 17.02 1 16V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 2.99 5.2 3zM3 16c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13.37.03.84.03 1.56.03h12c.72 0 1.2 0 1.56-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62.03-.37.03-.84.03-1.56v-4h-4.61a4.5 4.5 0 0 1-8.78 0H3zm0-6h5.5a1 1 0 0 1 1 1 2.5 2.5 0 0 0 5 0 1 1 0 0 1 1-1H21V8.5H3zm2.2-5c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42L3 6.5h18l-.02-.53a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C19.75 5 19.38 5 18.8 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderBold.displayName = 'CardHolderBold';

// Triple export pattern (lucide-react style)
export { CardHolderBold, CardHolderBold as CardHolderBoldIcon, CardHolderBold as SiCardHolderBold };
export default CardHolderBold;
export type { CardHolderBoldProps };
