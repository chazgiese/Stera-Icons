import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomAiBoldProps = Omit<IconBaseProps, 'children'>;

const AtomAiBold = memo(
  forwardRef<SVGSVGElement, AtomAiBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.96 13.62a1 1 0 0 1 1.41.03l.48.5c2.11 2.1 4.5 3.86 6.5 4.89 1 .51 1.87.82 2.53.92.7.1.93-.04.98-.1.08-.07.26-.41.02-1.4-.23-.9-.75-2.06-1.54-3.36a1 1 0 0 1 1.7-1.04A15 15 0 0 1 21.82 18c.27 1.1.33 2.42-.54 3.29-.73.73-1.78.8-2.7.66-.95-.15-2.03-.55-3.14-1.12a30 30 0 0 1-7.51-5.79 1 1 0 0 1 .03-1.4" />
        <path fill="currentColor" d="M8.98 7.92a1 1 0 0 1 1.38 1.44l-.5.5a28 28 0 0 0-4.9 6.49 9 9 0 0 0-.92 2.53c-.1.7.04.93.1.98.07.08.41.26 1.4.02.9-.23 2.06-.75 3.36-1.54a1 1 0 0 1 1.04 1.7 15 15 0 0 1-3.93 1.78c-1.1.27-2.42.33-3.29-.54-.73-.73-.8-1.78-.66-2.7.15-.95.56-2.03 1.12-3.14a30 30 0 0 1 5.8-7.52M17.99 2.18c1.1-.27 2.42-.33 3.29.54.73.73.8 1.78.66 2.7-.15.96-.55 2.04-1.12 3.14a30 30 0 0 1-5.79 7.52 1 1 0 0 1-1.38-1.45l.5-.48c2.1-2.11 3.86-4.49 4.89-6.5.51-1 .82-1.87.92-2.53.1-.7-.04-.93-.1-.98-.07-.08-.41-.26-1.4-.02-.9.23-2.06.75-3.36 1.55a1 1 0 1 1-1.04-1.71 15 15 0 0 1 3.93-1.78" />
        <path fill="currentColor" d="M2.72 2.72c.73-.73 1.78-.8 2.7-.66.96.15 2.04.56 3.14 1.12a30 30 0 0 1 7.52 5.8 1 1 0 0 1-1.45 1.37l-.48-.5a28 28 0 0 0-6.5-4.89 9 9 0 0 0-2.53-.92c-.7-.1-.93.04-.98.1-.08.07-.26.41-.02 1.4.23.9.75 2.07 1.55 3.36a1 1 0 0 1-1.7 1.04 15 15 0 0 1-1.79-3.92c-.27-1.11-.33-2.43.54-3.3" />
    </IconBase>
  ))
);

AtomAiBold.displayName = 'AtomAiBold';

// Triple export pattern (lucide-react style)
export { AtomAiBold, AtomAiBold as AtomAiBoldIcon, AtomAiBold as SiAtomAiBold };
export type { AtomAiBoldProps };
