import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CityBoldProps = Omit<IconBaseProps, 'children'>;

const CityBold = memo(
  forwardRef<SVGSVGElement, CityBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="city-bold" {...props}>
      <path d="M6.67 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.33-.75.75-.75M6.67 10.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.33-.75.75-.75M6.67 6.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V7c0-.41.33-.75.75-.75M12 14.25c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M17.33 14.25c.42 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75M17.33 10.25c.42 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0v-1c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M7.33 3q.52 0 .9.02.37.02.76.17l.11.06.16.08q.54.34.83.9.2.46.22.87t.02.9v5.03h.1q.4-.04.9-.03h1.34q.5 0 .9.02l.1.01V10q0-.5.02-.9.01-.41.22-.87l.09-.16q.34-.54.9-.82l.1-.06q.41-.14.76-.17.4-.02.9-.02H18q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v9a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2V6q0-.5.02-.9c.02-.27.07-.57.23-.87l.08-.16q.34-.54.9-.82l.11-.06q.4-.15.76-.17Q5.5 3 6 3zM6 5l-.87.03a.3.3 0 0 0-.1.1l-.02.13L5 6v13h3.33V6l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L7.33 5zm5.33 8-.87.03a.3.3 0 0 0-.1.1l-.01.13c-.02.16-.02.37-.02.74v5h3.34v-5l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02-.74-.01zm5.34-4-.87.03a.3.3 0 0 0-.1.1l-.02.13-.01.74v9H19v-9l-.03-.87a.3.3 0 0 0-.1-.1l-.13-.02L18 9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CityBold.displayName = 'CityBold';

// Triple export pattern (lucide-react style)
export { CityBold, CityBold as CityBoldIcon, CityBold as SiCityBold };
export default CityBold;
export type { CityBoldProps };
