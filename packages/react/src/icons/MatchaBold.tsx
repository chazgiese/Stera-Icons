import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MatchaBoldProps = Omit<IconBaseProps, 'children'>;

const MatchaBold = memo(
  forwardRef<SVGSVGElement, MatchaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3c2.55 0 4.9.29 6.63.77.86.24 1.63.54 2.21.92.54.35 1.16.94 1.16 1.81q0 .13-.02.25l-.23 2.2a9 9 0 0 1-.68 2.6C22.2 12.43 23 13.6 23 15c0 1.96-1.57 3.47-3.48 4.43A17 17 0 0 1 12 21a17 17 0 0 1-7.52-1.57C2.57 18.47 1 16.96 1 15c0-1.4.8-2.56 1.93-3.46a9 9 0 0 1-.68-2.6l-.23-2.19L2 6.5c0-.87.62-1.46 1.16-1.8a8 8 0 0 1 2.2-.93C7.12 3.29 9.47 3 12 3m8.07 10.3A9 9 0 0 1 12.8 17h-1.6a9 9 0 0 1-7.27-3.7C3.27 13.9 3 14.5 3 15c0 .8.67 1.79 2.38 2.64C7.02 18.46 9.36 19 12 19s4.98-.54 6.62-1.36C20.32 16.8 21 15.8 21 15c0-.51-.27-1.1-.93-1.7m-.33-4.44q-.6.24-1.3.42c-1.72.45-3.98.72-6.44.72s-4.72-.27-6.44-.72q-.7-.18-1.3-.42A6.97 6.97 0 0 0 11.2 15h1.6a7 7 0 0 0 6.94-6.14M12 5c-2.42 0-4.58.27-6.1.7a6 6 0 0 0-1.82.8q.07.08.29.2.56.35 1.7.65c1.5.4 3.6.65 5.93.65s4.42-.25 5.93-.65q1.14-.3 1.7-.64.22-.13.3-.21l-.19-.14a6 6 0 0 0-1.64-.66A24 24 0 0 0 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaBold.displayName = 'MatchaBold';

export { MatchaBold };
export type { MatchaBoldProps };
