import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CardHolderFillProps = Omit<IconBaseProps, 'children'>;

const CardHolderFill = memo(
  forwardRef<SVGSVGElement, CardHolderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="card-holder-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.8 3q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V16q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H6q-1.02.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q.99 17.02 1 16V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 2.99 5.2 3zM3 10.25h5.5c.41 0 .75.34.75.75a2.75 2.75 0 1 0 5.5 0c0-.41.34-.75.75-.75H21V8.5H3zM5.2 5c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42L3 6.5h18l-.02-.53a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C19.75 5 19.38 5 18.8 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderFill.displayName = 'CardHolderFill';

// Triple export pattern (lucide-react style)
export { CardHolderFill, CardHolderFill as CardHolderFillIcon, CardHolderFill as SiCardHolderFill };
export default CardHolderFill;
export type { CardHolderFillProps };
