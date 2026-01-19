import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MatchaFillProps = Omit<IconBaseProps, 'children'>;

const MatchaFill = memo(
  forwardRef<SVGSVGElement, MatchaFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="matcha-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3c2.55 0 4.9.29 6.63.77.86.24 1.63.54 2.21.92.54.35 1.16.94 1.16 1.81q0 .13-.02.25l-.23 2.2-.05.38-.03.17-.05.27-.02.12a9 9 0 0 1-.4 1.32l-.05.14-.08.2C22.2 12.43 23 13.6 23 15c0 1.96-1.57 3.47-3.48 4.43A17 17 0 0 1 12 21a17 17 0 0 1-7.52-1.57C2.57 18.47 1 16.96 1 15c0-1.4.8-2.56 1.93-3.46l-.07-.15-.08-.2-.04-.13-.08-.23-.06-.18-.2-.76-.02-.12-.05-.27-.03-.17-.05-.39-.23-2.19L2 6.5c0-.87.62-1.46 1.16-1.8a8 8 0 0 1 2.2-.93C7.12 3.29 9.47 3 12 3m8.07 10.3a9 9 0 0 1-3.77 2.99l-.17.07-.1.04-.12.05-.6.2q-.03 0-.08.02l-.56.13-.15.03-.7.11-.13.02-.2.01-.1.01-.6.02H11.2q-.3 0-.6-.02h-.08l-.2-.02-.14-.02a9 9 0 0 1-2.08-.49l-.15-.06-.29-.11-.04-.02-.43-.2-.1-.06-.1-.05a9 9 0 0 1-.77-.45l-.08-.06-.16-.1-.04-.04a9 9 0 0 1-2-2C3.26 13.9 3 14.5 3 15c0 .8.67 1.79 2.38 2.64C7.02 18.46 9.36 19 12 19s4.98-.54 6.62-1.36C20.32 16.8 21 15.8 21 15c0-.51-.27-1.1-.93-1.7M12 5c-2.42 0-4.58.27-6.1.7a6 6 0 0 0-1.82.8q.07.08.29.2.56.34 1.7.65c1.5.4 3.6.65 5.93.65s4.42-.25 5.93-.65q1.14-.31 1.7-.64l.03-.02q.19-.12.26-.2l-.18-.13a6 6 0 0 0-1.64-.66A24 24 0 0 0 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaFill.displayName = 'MatchaFill';

// Triple export pattern (lucide-react style)
export { MatchaFill, MatchaFill as MatchaFillIcon, MatchaFill as SiMatchaFill };
export default MatchaFill;
export type { MatchaFillProps };
