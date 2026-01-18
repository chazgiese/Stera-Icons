import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SwatchBookRegularProps = Omit<IconBaseProps, 'children'>;

const SwatchBookRegular = memo(
  forwardRef<SVGSVGElement, SwatchBookRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M9 2.25A2.75 2.75 0 0 1 11.75 5v.53l.38-.37a2.75 2.75 0 0 1 3.89 0l2.82 2.82a2.75 2.75 0 0 1 0 3.9l-.37.37H19A2.75 2.75 0 0 1 21.75 15v4A2.75 2.75 0 0 1 19 21.75H7a5 5 0 0 1-.73-.06h-.08q-.05-.02-.1-.03l-.13-.03a5 5 0 0 1-.87-.28h-.01A4.8 4.8 0 0 1 2.25 17V5A2.75 2.75 0 0 1 5 2.25zm-4 1.5c-.69 0-1.25.56-1.25 1.25v12q0 .78.33 1.43l.06.12a3.2 3.2 0 0 0 1.7 1.49 3 3 0 0 0 1.09.2l.07.01a3 3 0 0 0 1.37-.3l.03-.02.41-.23.03-.02a3 3 0 0 0 .64-.59l.03-.03a3.3 3.3 0 0 0 .74-2.06V5c0-.69-.56-1.25-1.25-1.25zm5.47 16.5H19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-2.03zm4.49-14.03a1.25 1.25 0 0 0-1.77 0l-1.44 1.43v9.2l6.03-6.04c.5-.49.5-1.28 0-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookRegular.displayName = 'SwatchBookRegular';

export { SwatchBookRegular };
export type { SwatchBookRegularProps };
