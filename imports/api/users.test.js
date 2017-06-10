import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('users', function() {
    it('should allow valid email address', function() {
      const testUser = {
        emails: [
          {
            address: 'email@test.com'
          }
        ]
      };
      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });

    it('should reject invalid email', function() {
      const testUser = {
        emails: [
          {
            address: 'email@@test.com'
          }
        ]
      };

      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });

  });
}
