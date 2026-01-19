import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StarBoldProps = Omit<IconBaseProps, 'children'>;

const StarBold = memo(
  forwardRef<SVGSVGElement, StarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.56 1.95a1.57 1.57 0 0 1 2.82-.12l.06.12 2.31 5.34 5.83.54a1.57 1.57 0 0 1 .88 2.74l-4.39 3.84 1.29 5.68a1.57 1.57 0 0 1-2.33 1.69L12 18.81l-5.03 2.97a1.57 1.57 0 0 1-2.33-1.7l1.29-5.67-4.4-3.84a1.57 1.57 0 0 1 .9-2.74l5.82-.54zm-.58 6.37c-.23.53-.72.89-1.3.94l-5.06.47 3.82 3.35c.43.37.62.96.5 1.52L6.8 19.55l4.4-2.6.18-.1c.39-.16.83-.16 1.22 0l.19.1 4.38 2.6-1.11-4.95c-.13-.56.06-1.15.5-1.52l3.81-3.35-5.07-.47a1.6 1.6 0 0 1-1.3-.94L12 3.65z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarBold.displayName = 'StarBold';

// Triple export pattern (lucide-react style)
export { StarBold, StarBold as StarBoldIcon, StarBold as SiStarBold };
export type { StarBoldProps };
